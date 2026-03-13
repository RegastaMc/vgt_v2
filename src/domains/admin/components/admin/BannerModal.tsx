"use client";

import React, { useEffect, useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import { Trash2Icon, UploadCloud } from "lucide-react";
import toast from "react-hot-toast";
import { Category } from "prisma/src/lib/prisma/client";

export default function BannerModal({
  open,
  setOpen,
  categories,
  banner,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
  categories: Category[];
  banner: any;
}) {
  const [imgUrl, setImgUrl] = useState("");
  const [categoryID, setCategoryID] = useState("");
  const [loading, setLoading] = useState(false);

  let imageValue = null;

  if (banner) {
    imageValue = JSON.stringify(imgUrl);
  } else {
    imageValue = JSON.stringify(imgUrl);
  }

  useEffect(() => {
    if (banner) {
      setImgUrl(banner.imgUrl ? banner.imgUrl : "");
      setCategoryID(banner.categoryID || "");
    } else {
      setImgUrl("");
      setCategoryID("");
    }
  }, [banner]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    const payload = {
      imgUrl: imgUrl ? JSON.parse(imgUrl) : null,
      categoryID: categoryID || null,
    };

    const url = banner ? `/api/sliders/${banner.id}` : `/api/sliders`;

    const method = banner ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      toast.error("Something went wrong, Please try again!");
      setLoading(false);
      return;
    }
    if (res.ok) {
      toast.success("Banner created successfully");
      setLoading(false);
    }

    if (loading) {
      setOpen(true);
    } else {
      setOpen(false);
    }

    window.location.reload();
  }

  async function handleImageDelete(publicId: string) {
    const res = await fetch("/api/delete-cld-image", {
      method: "POST",
      body: JSON.stringify({ publicId }),
    });

    if (res.ok) {
      toast.success("Image deleted successfully", { position: "top-center", duration: 4000 });
    }
    if (!res.ok) {
      toast.error("Failed to delete image", { position: "top-center", duration: 4000 });
    }

    setImgUrl("");
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <div className="bg-white p-6 rounded w-[420px]">
        <h2 className="text-lg font-bold mb-4">{banner ? "Edit Banner" : "Create Banner"}</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* IMAGE UPLOAD */}
          <div>
            <label className="text-sm font-medium">Slider Image</label>

            <div className="flex items-center gap-3 flex-wrap mt-2">
              <CldUploadWidget
                signatureEndpoint="/api/sign-upload"
                options={{
                  folder: "shoppit",
                  maxFiles: 1,
                  multiple: false,
                  resourceType: "image",
                }}
                onSuccess={(res) => {
                  const info = (res as any)?.info;

                  if (info?.secure_url && info?.public_id) {
                    setImgUrl(
                      JSON.stringify({
                        url: info.secure_url,
                        publicId: info.public_id,
                      }),
                    );
                  }
                }}
              >
                {({ open }) => (
                  <button
                    type="button"
                    onClick={() => open()}
                    className="px-4 h-28 bg-gray-600 rounded-md text-center flex flex-col justify-center items-center text-sm cursor-pointer text-white"
                  >
                    <UploadCloud size={20} />
                    Banner Image
                  </button>
                )}
              </CldUploadWidget>

              {imgUrl && (
                <div className="relative w-28 h-28 rounded overflow-hidden border">
                  <button
                    type="button"
                    onClick={() => handleImageDelete(JSON.parse(imageValue).publicId)}
                    className="absolute top-2 right-2 bg-white p-1 rounded-full shadow"
                  >
                    <Trash2Icon size={16} className="text-red-500 cursor-pointer hover:opacity-70" />
                  </button>

                  <img
                    src={banner ? JSON.parse(imageValue).url : JSON.parse(imgUrl).url}
                    alt="slider"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>

          {/* CATEGORY */}
          <div>
            <label className="text-sm font-medium">Category</label>

            <select
              value={categoryID}
              onChange={(e) => setCategoryID(e.target.value)}
              className="w-full border p-2 rounded mt-2"
            >
              <option value="">Select Category</option>

              {categories.map((cat, index) => (
                <option key={index} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => {
                (setOpen(false), !banner && imgUrl && handleImageDelete(JSON.parse(imgUrl).publicId));
              }}
              className="border px-3 py-2 rounded"
            >
              Cancel
            </button>

            <button type="submit" className="bg-blue-600 text-white px-3 cursor-pointer py-2 rounded">
              {loading ? (banner ? "Updating..." : "Creating...") : banner ? "Update Banner" : "Create Banner"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
