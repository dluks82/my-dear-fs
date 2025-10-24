export default function Logo({
  className = "h-12 w-auto",
}: {
  className?: string;
}) {
  return (
    <div className={`${className} overflow-hidden flex items-center`}>
      <img
        src="/images/full_logo_bege.png"
        alt="My Dear Flower Shop"
        className="w-auto h-[150%] object-cover"
        style={{
          marginTop: "-25%",
          marginBottom: "-25%",
          filter:
            "brightness(0) saturate(100%) invert(62%) sepia(20%) saturate(600%) hue-rotate(6deg) brightness(94%) contrast(88%)",
        }}
      />
    </div>
  );
}
