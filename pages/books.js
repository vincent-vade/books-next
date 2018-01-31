import React, { Component } from 'react';
import Head from 'next/head';
import withRedux from 'next-redux-wrapper';

import makeStore from '../redux/store'
import getBooks from '../redux/actions/getBooks'
import Layout from '../components/Layout';

class About extends Component {
  static async getInitialProps({ store, isServer, pathname }) {
    console.log(store)
    const m = await getBooks()
    console.log(m)
  }

  render() {
    return (
      <Layout title="Books-list">
        <p>vygbhnjk,l;</p>
        {
          console.log(this.props.books)
         /* this.props.books.map((book, key) =>{
            console.log('book', book, 'key', key)
            return (
              <div key={book.ID} className="books--item">
                {book.Title}
              </div>
            )
          })
        */}
      </Layout>
    )
  }
}

About = withRedux(makeStore, state => ({ books: state.books.books }))(About);

export default About

