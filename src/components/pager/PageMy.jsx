import React, {useState, useEffect} from 'react';
import { Row, Col, Button } from 'antd';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import './style.scss';

const Pager = ({data, component, perPage}) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [pageCount, setPageCount] = useState(0);
	const Component = component;

	useEffect(() => {
		setPageCount(Math.ceil(data.length / perPage))
	}, [data, component, perPage]);

	const paginate = () => {
        const start = (currentPage - 1) * perPage;
		const end = start + perPage;
		
        return data.slice(start, end);
	}
	
	const handlePrev = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1)
		}
	}

	const handleNext = () => {
		if (currentPage < pageCount) {
			setCurrentPage(currentPage + 1)
        }
	}

	if (pageCount === 0) {
		return null;
	}
	return (
		<>
			{
				paginate().map(item => <Component key={uuid()} employee={item}/>)
			}
			<Row>
				<Col span={12} offset={12}>
					<div className="pager_buttons">
						<Button
							className="prev"
							onClick={handlePrev}
							disabled={currentPage <= 1}
						>
							Previous
						</Button>
						<div className="page_counter">
							<span>Page {currentPage} of {pageCount}</span>
						</div>
						<Button
							className="next"
							onClick={handleNext}
							disabled={currentPage >= pageCount}
						>
							Next
						</Button>
					</div>
				</Col>
			</Row>
		</>
	)
}

Pager.propTypes = {
	data: PropTypes.array.isRequired,
	component: PropTypes.func.isRequired,
	perPage: PropTypes.number.isRequired,
}

export default Pager;