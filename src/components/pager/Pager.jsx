import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Pager = styled.div`
    padding: 20px;
    margin: 0 20px 20px 20px;
    box-shadow: ${props => props.theme.boxShadow};
    background-color: ${props => props.theme.white};
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    .prev,
    .next {
        padding: 5px 10px;
        font-size: 1rem;
        border: 2px solid ${props => props.theme.blue};
        background-color: ${props => props.theme.white};
        color: ${props => props.theme.blue};
        cursor: pointer;
        transition: background-color 0.15s linear;

        &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        &:not(:disabled) {
            &:hover {
                background-color: ${props => props.theme.blue}
                color: ${props => props.theme.white}
            }
        }
    }
`

const Total = styled.p`
    flex-basis: 100%;
`

const PageCount = styled.span`
    font-size: 0.875rem;
`

class PagerTest extends Component {
    state = {
        currentPage: 1,
    }

    static propTypes = {
        /* eslint-disable react/no-unused-prop-types */
        perPage: PropTypes.number.isRequired,
        /* eslint-disable react/no-unused-prop-types */
        data: PropTypes.instanceOf(Array).isRequired,
    }

    static getDerivedStateFromProps(nextProps) {
        const { perPage, data } = nextProps
        const pageCount = Math.ceil(data.length / perPage)
        return {
            perPage,
            pageCount,
        }
    }

    next = () => {
        const { currentPage, pageCount } = this.state
        if (currentPage < pageCount) {
            this.setState(prevState => ({
                currentPage: prevState.currentPage + 1,
            }))
        }
    }

    prev = () => {
        const { currentPage } = this.state
        if (currentPage > 1) {
            this.setState(prevState => ({
                currentPage: prevState.currentPage - 1,
            }))
        }
    }

    paginate = () => {
        const { currentPage, perPage } = this.state
        const { data } = this.props
        const start = (currentPage - 1) * perPage
        const end = start + perPage
        return data.slice(start, end)
    }

    render() {
        const { currentPage, pageCount } = this.state
        const { children, data } = this.props
        return (
            <Fragment>
                <Total>{data.length} Items Total</Total>
                {children({ pageData: this.paginate() })}
                <Pager>
                    <button
                        className="prev"
                        type="button"
                        onClick={this.prev}
                        disabled={currentPage <= 1}
                    >
                        Previous
                    </button>
                    <PageCount>
                        Page {currentPage} of {pageCount}
                    </PageCount>
                    <button
                        className="next"
                        type="button"
                        onClick={this.next}
                        disabled={currentPage >= pageCount}
                    >
                        Next
                    </button>
                </Pager>
            </Fragment>
        )
    }
}

export default PagerTest;