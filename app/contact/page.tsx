export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 px-4 py-16 bg-gradient-to-br from-pink-50 to-rose-100 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-black dark:text-zinc-50 mb-4">
          Contact Me
        </h1>
        <p className="text-xl leading-8 text-zinc-600 dark:text-zinc-400">
          Email: tylerqjones24@gmail.com<br />
          GitHub: <a href="https://github.com/tylerqjones" className="hover:underline">github.com/tylerqjones</a><br />
          LinkedIn: <a href="https://www.linkedin.com/in/tylerqjones/" className="hover:underline">linkedin.com/in/tylerqjones</a>
        </p>
      </div>
    </div>
  );
}
