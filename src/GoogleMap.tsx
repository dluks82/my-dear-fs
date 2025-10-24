export default function GoogleMap({
  src,
  className = "w-full h-[300px]",
}: {
  src: string;
  className?: string;
}) {
  return (
    <div className={`${className} rounded-lg overflow-hidden shadow-lg`}>
      <iframe
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização My Dear Flower Shop"
      />
    </div>
  );
}
