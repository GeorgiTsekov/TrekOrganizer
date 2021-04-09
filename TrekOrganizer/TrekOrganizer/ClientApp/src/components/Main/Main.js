
import Trek from '../Trek/Trek'
import './Main.css'

const Main = ({
	treks
}) => {
	return (
		<main className="main-container">
			<div className="treks">
				{treks.map(x =>
					<Trek
						key={x.id}
						content={x.content}
						createdOn={x.createdOn}
						description={x.description}
						startDate={x.startDate}
						endDate={x.endDate}
						imageURL={x.imageURL}
						likes={x.likes}
						organizer={x.organizer}
					/>
				)}
			</div>
		</main>
	);
}

export default Main;