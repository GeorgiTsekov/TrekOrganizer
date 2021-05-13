import { Component } from 'react';
import axios from 'axios';

import './Categories.css'

import CategoryNavigation from './CategoryNavigation/CategoryNavigation';
import Trek from '../Trek/Trek'

class Categories extends Component {
    constructor(props) {
        super(props);

        this.state = {
            treks: [],
            currentCategory: 'All',
        }
    }

    componentDidMount() {
        axios.get('treks').then(
            res => {
                this.setState({ treks: res.data });
            },
            err => {
                console.log(err.response);
            }
        )
    }

    componentDidUpdate(prevProps, prevState) {
        const category = this.props.match.params.category;

        if (prevProps.match.params.category == category) {
            return;
        }
        let currentCategory = (category && category != 'All') ? `?categoryName=${category}` : '';
        axios.get(`treks/${currentCategory}`)
            .then(res => this.setState({ treks: res.data, currentCategory: category }));
    }

    render() {
        return (
            <div className="dashboard">

                <CategoryNavigation />

                <main className="main-container">
                    <div className="treks">
                        {this.state.treks.map(x =>
                            <Trek
                                key={x.id}
                                id={x.id}
                                categoryName={x.categoryName}
                                location={x.location}
                                createdOn={x.createdOn}
                                description={x.description}
                                startDate={x.startDate}
                                endDate={x.endDate}
                                imageUrl={x.imageUrl}
                                likes={x.likes}
                                organizer={x.organizer}
                            />
                        )}
                    </div>
                </main>
            </div>
        );
    }
}

export default Categories;