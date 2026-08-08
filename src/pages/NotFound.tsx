import { Link } from 'react-router-dom'
import { Button, EmptyState } from '../ui/primitives'
import { IconSearch } from '../ui/icons'

export default function NotFound() {
  return (
    <div className="max-w-lg mx-auto">
      <EmptyState
        icon={<IconSearch size={20} />}
        title="Nothing here"
        body="That page does not exist. It may have been a lesson that has since been renamed."
        action={
          <Link to="/browse">
            <Button variant="primary">Browse the curriculum</Button>
          </Link>
        }
      />
    </div>
  )
}
