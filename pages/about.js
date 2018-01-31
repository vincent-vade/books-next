import React, { Component } from 'react';
import Head from 'next/head';
import withRedux from 'next-redux-wrapper';

import makeStore from '../redux/store'
import apiProvider from '../config/provider/api'
import Layout from '../components/Layout';

class About extends Component {
  static async getInitialProps() {
    const req = await apiProvider().get('/Books');
    const res = await req.data;
    return {
      books: res
    }
  }

  render() {
    return (
      <Layout title="About us">
        {
          this.props.books.map((book, key) =>{
            console.log('book', book, 'key', key)
            return (
              <div key={book.ID} className="books--item">
                {book.Title}
              </div>
            )
          })
        }
      </Layout>
    )
  }
}

About = withRedux(makeStore, state => ({ books: state.books }))(About);

export default About

