import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/name')({
  component: NameComponent,
})

function NameComponent() {
  return (
    <div className="p-2">
      <h3>name</h3>
    </div>
  )
}
