import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBG";

export const BentoGrid = ({
  className,
  children
}) => {
  return (
    (<div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-8 lg:gap-8 mx-auto",
        className
      )}>
      {children}
    </div>)
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )} style={{
        background: "linear-gradient(125deg, #01020a 0%, #0c0d28 100%)"
      }}>
      {/* Add h-[60%] to control main image container height */}
      <div className={cn(
        "h-[60%] overflow-hidden", // Add overflow-hidden
        id === 6 && "flex justify-center h-full"
      )}>
        {img && (
          <img
            src={img}
            alt={img}
            className={cn(
              'w-full h-full', // Ensure image takes full height of container
              'object-cover object-center',
              imgClassName
            )}
          />
        )}
      </div>
      {/* Add overflow-hidden to spare image container */}
      <div className={cn(
        "absolute right-0 -bottom-5 overflow-hidden",
        id === 5 && "w-full opacity-80"
      )}>
        {spareImg && (
          <img // Changed from spareImg to img
            src={spareImg}
            alt={spareImg}
            className="object-cover object-center w-full h-full"
          />
        )}
      </div>
      {id === 6 && (
        <div className="absolute inset-0 overflow-hidden"> 
        <BackgroundGradientAnimation>
          <div className="absolute inset-0 z-50 flex items-center justify-center text-white-100 font-bold" />
        </BackgroundGradientAnimation>
      </div>
      )}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className={cn(
          "font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2",
          titleClassName
        )}>
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};