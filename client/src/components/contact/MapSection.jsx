const MapSection = () => {
  return (
    <section className="h-[450px]">
      <iframe
        className="w-full h-full"
        loading="lazy"
        src="https://www.google.com/maps?q=London%20Eye&output=embed"
      />
    </section>
  );
};

export default MapSection