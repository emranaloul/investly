import  { Children } from "react";

function AvatarGroup({ avatars }: { avatars: string[] }) {
  return (
    <div className="flex -space-x-2">
      {Children.toArray(
        avatars.map((avatar) => (
          <img
            className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800"
            src={avatar}
            alt="Image Description"
          />
        ))
      )}
    </div>
  );
}

export default AvatarGroup;
