import Link from "next/link";

type TProps = {
  pageHeader: string;
  subCategories?: { label: string; url: string }[];
  pathName?: string;
};

const NoItem = ({ pageHeader, subCategories, pathName }: TProps) => {
  return (
    <div
      className={
        "styles.noItemContainer w-full h-full min-h-[600px] flex flex-col gap-16 text-gray-800 items-center mt-16 text-lg font-light"
      }
    >
      <span> There is no product in {pageHeader} category!</span>
      <div className="text-sm flex flex-col gap-4">
        {subCategories && subCategories.length > 0 && (
          <>
            <span className="w-full text-center"> You Can Check These Categories Instead:</span>
            <div className="flex gap-3 items-center justify-center">
              {subCategories?.map((cat) => (
                <Link
                  className="border border-gray-300 px-4 py-1 rounded-md transition-colors duration-300 hover:bg-gray-100"
                  href={pathName + "/" + cat.url}
                >
                  {cat.label}
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NoItem;
