interface MessageProps {
  text: string
}

export default function Message({ text }: MessageProps) {
  return (
    <p className="text-lg md:text-xl text-center max-w-xl leading-relaxed mb-8">
      {text}
    </p>
  )
}
