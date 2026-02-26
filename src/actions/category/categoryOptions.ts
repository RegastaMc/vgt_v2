"use server";

import { db } from "@/shared/lib/db";
import { TOptionSet, TSingleOption, TSingleSpec, TSpecGroup } from "@/shared/types/common";
import { OptionSetType } from "prisma/src/lib/prisma/client";
import { z } from "zod";

// ------------------------------------------------------
// ZOD SCHEMAS (Postgres + cuid safe)
// ------------------------------------------------------

const AddOptionSet = z.object({
  name: z.string().min(3),
  type: z.nativeEnum(OptionSetType),
});

const SingleOption = z.object({
  optionSetID: z.string(),
  name: z.string().min(3),
  value: z.string().min(3),
});

const AddSpecGroup = z.object({
  title: z.string().min(3),
});

const SingleSpec = z.object({
  specGroupID: z.string(),
  value: z.string().min(3),
});

// ------------------------------------------------------
// OPTION SETS
// ------------------------------------------------------

export const getOptionSetByCatID = async (categoryID: string) => {
  if (!categoryID) return { error: "Invalid Data!" };

  try {
    const result = await db.optionSet.findMany({
      where: {
        Category_Option: {
          some: { categoryID },
        },
      },
      include: {
        options: true, // NameValue relation
      },
    });

    return { res: result };
  } catch (error) {
    return { error: JSON.stringify(error) };
  }
};

export const addOptionSet = async (data: TOptionSet) => {
  if (!AddOptionSet.safeParse(data).success) return { error: "Invalid Data" };

  try {
    const result = await db.category.update({
      where: { id: data.id },
      data: {
        Category_Option: {
          create: {
            option: {
              create: {
                name: data.name,
                type: data.type,
              },
            },
          },
        },
      },
    });

    return { res: result };
  } catch (error) {
    return { error: JSON.stringify(error) };
  }
};

export const deleteOptionSet = async (id: string) => {
  if (!id) return { error: "Invalid Data" };

  try {
    const result = await db.optionSet.delete({
      where: { id },
    });

    return { res: result };
  } catch (error) {
    return { error: JSON.stringify(error) };
  }
};

// ------------------------------------------------------
// SINGLE OPTION (NameValue)
// ------------------------------------------------------

export const addSingleOption = async (data: TSingleOption) => {
  if (!SingleOption.safeParse(data).success) return { error: "Invalid Data!" };

  try {
    const result = await db.nameValue.create({
      data: {
        name: data.name,
        value: data.value,
        optionSetID: data.optionSetID,
      },
    });

    return { res: result };
  } catch (error) {
    return { error: JSON.stringify(error) };
  }
};

// ⚠️ Delete by ID (NOT name/value)
export const deleteSingleOption = async (id: string) => {
  if (!id) return { error: "Invalid Data!" };

  try {
    const result = await db.nameValue.delete({
      where: { id },
    });

    return { res: result };
  } catch (error) {
    return { error: JSON.stringify(error) };
  }
};

// ------------------------------------------------------
// SPEC GROUPS
// ------------------------------------------------------

export const getSpecGroupByCatID = async (categoryID: string) => {
  if (!categoryID) return { error: "Invalid Data!" };

  try {
    const result = await db.specGroup.findMany({
      where: {
        Category_SpecGroup: {
          some: { categoryID },
        },
      },
      select: {
        specs: true,
        id: true,
        title: true,
        Category_SpecGroup: true,
      },
    });

    return { res: result };
  } catch (error) {
    return { error: JSON.stringify(error) };
  }
};

export const addSpecGroup = async (data: TSpecGroup) => {
  if (!AddSpecGroup.safeParse(data).success) return { error: "Invalid Data" };

  try {
    const result = await db.category.update({
      where: { id: data.id },
      data: {
        Category_SpecGroup: {
          create: {
            specGroup: {
              create: {
                title: data.title,
                specs: [],
              },
            },
          },
        },
      },
    });

    return { res: result };
  } catch (error) {
    return { error: JSON.stringify(error) };
  }
};

export const deleteSpecGroup = async (id: string) => {
  if (!id) return { error: "Invalid Data" };

  try {
    const result = await db.specGroup.delete({
      where: { id },
    });

    return { res: result };
  } catch (error) {
    return { error: JSON.stringify(error) };
  }
};

// ------------------------------------------------------
// SINGLE SPEC (String[] safe handling)
// ------------------------------------------------------

export const addSingleSpec = async (data: TSingleSpec) => {
  if (!SingleSpec.safeParse(data).success) return { error: "Invalid Data!" };

  try {
    const group = await db.specGroup.findUnique({
      where: { id: data.specGroupID },
      select: { specs: true },
    });

    if (!group) return { error: "Spec group not found" };

    const result = await db.specGroup.update({
      where: { id: data.specGroupID },
      data: {
        specs: [...group.specs, data.value],
      },
    });

    return { res: result };
  } catch (error) {
    return { error: JSON.stringify(error) };
  }
};

export const deleteSingleSpec = async (data: TSingleSpec) => {
  if (!SingleSpec.safeParse(data).success) return { error: "Invalid Data!" };

  try {
    const group = await db.specGroup.findUnique({
      where: { id: data.specGroupID },
      select: { specs: true },
    });

    if (!group) return { error: "Spec group not found" };

    const result = await db.specGroup.update({
      where: { id: data.specGroupID },
      data: {
        specs: group.specs.filter((spec) => spec !== data.value),
      },
    });

    return { res: result };
  } catch (error) {
    return { error: JSON.stringify(error) };
  }
};
