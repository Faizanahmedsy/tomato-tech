import { cn } from "@/lib/utils";

const CardBody = ({
  className = "p-4",
  data,
}: {
  className?: string;
  data: { title: string; description: string };
}) => (
  <div className={cn("text-left", className)}>
    <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-gray-100">
      {data.title}
    </h3>
    <p className="text-gray-700 dark:text-gray-300">{data.description}</p>
  </div>
);
//======================================
export const SimpleCard_V1 = ({
  data,
}: {
  data: { title: string; description: string };
}) => {
  console.log("data");
  const Icon = ({ className, ...rest }: any) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width={24}
        height={24}
        strokeWidth="1"
        stroke="currentColor"
        className={cn("dark:text-white text-black size-6 absolute", className)}
        {...rest}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
      </svg>
    );
  };
  return (
    <div>
      <div className="border border-dashed border-zinc-400 dark:border-zinc-700 relative">
        <Icon className="-top-3 -left-3" />
        <Icon className="-top-3 -right-3" />
        <Icon className="-bottom-3 -left-3" />
        <Icon className="-bottom-3 -right-3" />
        <CardBody className="p-6" data={data} />
      </div>
    </div>
  );
};
