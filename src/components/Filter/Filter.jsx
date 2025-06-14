import { Component } from "react";

import { StyledFilter } from "./StyledFilter";

export class Filter extends Component {
    render() {
        return (
            <StyledFilter>
                <label htmlFor="filter">Фільтр по імені:</label>
                <input type="text" name="filter" value={this.props.value} onChange={this.props.onChange} />
            </StyledFilter>
        );
    }
}