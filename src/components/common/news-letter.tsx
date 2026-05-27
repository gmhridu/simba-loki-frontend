export function NewsLetter() {
  return (
    <div className="bg-background relative">
      {/* Top gradient border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, #C9A96E 50%, transparent)",
        }}
      />
      {/* Bottom gradient border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, #C9A96E 50%, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 py-12 md:py-20">
          {/* Text */}
          <div className="space-y-3 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl uppercase dark:text-white">
              BE THE FIRST TO KNOW
            </h1>

            <p className="text-sm md:text-base dark:text-white/80 max-w-md md:max-w-none mx-auto md:mx-0">
              Exclusive launches, new collections and offers - straight to your
              inbox.
            </p>
          </div>

          {/* Input + Button */}
          <div className="flex flex-col sm:flex-row w-full md:w-auto gap-2 sm:gap-0.5">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-80 md:w-96 border border-primary/70 p-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition bg-transparent dark:text-white dark:placeholder:text-white/50"
            />

            <button className="primary-button rounded-none inline-flex items-center justify-center text-white/90 uppercase text-xs md:text-sm px-6 py-3 md:px-8 md:py-4">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
