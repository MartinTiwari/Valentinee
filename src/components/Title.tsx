interface TitleProps {
  text: string
}

export default function Title({ text }: TitleProps) {
  return (
    <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
      {text}
    </h1>
  )
}
