export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 px-4 py-16 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-black dark:text-zinc-50 mb-4">
          About Me
        </h1>
        <p className="text-xl leading-8 text-zinc-600 dark:text-zinc-400">
          I am a first year computer science major at the University of Texas at Dallas.
        </p>
      </div>
    </div>
  );
}
