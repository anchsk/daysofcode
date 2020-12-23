import Link from 'next/link'

export default function GoBack() {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 400,
        color: 'white',
        fontSize: '12px',
        padding: '12px',
        cursor: 'pointer'
      }}
    >
      <Link href='/'>
        <a>&larr; back</a>
      </Link>
    </div>
  )
}
