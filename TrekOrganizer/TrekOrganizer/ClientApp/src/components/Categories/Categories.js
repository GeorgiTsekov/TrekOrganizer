import React, { Component } from 'react';
import * as trekService from '../../services/trekService';

import './Categories.css';

import CategoryNavigation from './CategoryNavigation/CategoryNavigation';
import Trek from '../Trek/Trek';

class Categories extends Component {
    constructor(props) {
        super(props);

        this.state = {
            treks: [],
            currentCategory: 'All'
        }
    }

    componentDidMount() {
        trekService.getAll()
            .then(res => this.setState({ treks: res }));

    }

    componentDidUpdate(prevProps, prevState) {
        const category = this.props.match.params.category;
        if (prevProps.match.params.category == category) {
            return;
        }

        trekService.getAll(category)
            .then(res => this.setState({ treks: res, currentCategory: category }));
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
                                category={x.category}
                                location={x.location}
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
            </div>
        );
    }
}

export default Categories;