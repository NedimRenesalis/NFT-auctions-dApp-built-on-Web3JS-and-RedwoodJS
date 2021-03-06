import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const AuctionsLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.auctions()} className="rw-link">
            Auctions
          </Link>
        </h1>
        <Link to={routes.newAuction()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Auction
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default AuctionsLayout
