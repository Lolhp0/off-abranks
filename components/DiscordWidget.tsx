import Link from "next/link";
import React from "react";

const DiscordWidget = () => {
  return (
    <>
      <iframe
        src="https://discord.com/widget?id=1161651210315636799&theme=dark"
        width="350"
        height="500"
        allowTransparency={true}
        frameBorder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      ></iframe>
      <div className="w-full h-fit flex flex-col items-center justify-center">
        <p>
          Join our discord server!
          <style jsx>
            {`
              p {
                font-size: 0.85rem;
              }
            `}
          </style>
        </p>
        <Link href="/" className="bg-blue-600 py-2 px-4 rounded-lg">
          Join Now!
        </Link>
      </div>
    </>
  );
};

export default DiscordWidget;
