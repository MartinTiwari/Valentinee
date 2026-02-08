interface RevealButtonProps {
  onClick: () => void
}

export default function RevealButton({ onClick }: RevealButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 rounded-full bg-pink-500 text-white font-semibold
                 hover:bg-pink-600 transition-colors duration-200"
    >
      Click me 💖
    </button>
  )
}
