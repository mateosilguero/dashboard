import React from 'react'
export default class Error extends React.Component {
  static getInitialProps ({ res, jsonPageRes }) {
    const statusCode = res ? res.statusCode : (jsonPageRes ? jsonPageRes.status : null)
    return { statusCode }
  }

  render () {
    return (
      <div style={styles.h2}>
        <h2>{this.props.statusCode} | {
          this.props.statusCode
          ? 'Página no encontrada.'
          : 'An error occurred on client' }
        </h2> 
      </div>
    )
  }
}

const styles = {
  h2: {
    color: '#d5393a',
    background: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    height: '95vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
}

