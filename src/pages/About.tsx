export default function About() {
  return (
    <>
      <div className="flex flex-col justify-center rounded-lg  p-8 font-title text-white">
        <div className="mx-auto max-w-xl bg-customRed/70 text-center">
          <h1 className="mt-8 text-center text-6xl">About Us</h1>
          <div className="m-16 text-center">
            <h2 className="text-4xl">Our Mission</h2>
            <p className="my-4 text-2xl">
              Our goal is to make journaling a delightful, simple, and personal
              experience. We aim to provide a space where you can capture,
              cherish, and share memories, one day at a time.
            </p>

            <h2 className="text-4xl">The Team</h2>
            <p className="my-4 text-2xl">
              We're a small, dedicated team of developers and designers with a
              passion for delivering excellent user experiences.
            </p>

            <h2 className="text-4xl">Our History</h2>
            <p className="my-4 text-2xl">
              Founded in 2021, we've rapidly grown from a small project into a
              community of dedicated users. We continuously strive to improve
              and innovate, keeping your feedback at the heart of our
              development process.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
