import React, { Component} from 'react';
import PropTypes from 'prop-types';

export default class Page extends Component {
    onYearBtnClick(e) {
        const currentYear = Number(e.target.innerText);
        this.props.getPhotos(currentYear);
    }
    render() {
        const {year, photos, loading } = this.props;
        return (
            <div className='ib page'>
                <p>
                    <button className="btn" onClick={this.onYearBtnClick.bind(this)}>2016</button>
                    <button className="btn" onClick={this.onYearBtnClick.bind(this)}>2015</button>
                    <button className="btn" onClick={this.onYearBtnClick.bind(this)}>2014</button>
                </p>
                <h3>{year} год</h3>
                {
                    loading ?
                    <p>Загрузка...</p>
                    :
                    <p>У тебя {photos.length} фото.</p>
                }
            </div>
        );
    }
}

Page.propTypes = {
    loading: PropTypes.bool.isRequired,
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    getPhotos: PropTypes.func.isRequired
}