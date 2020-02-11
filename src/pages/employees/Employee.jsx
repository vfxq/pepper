import React from 'react';
import user from '@src/images/static/user.png';
import { Row, Col } from 'antd';
import sanitizeHtml from 'sanitize-html'
import './style.scss'

const handleError = e => {
	e.target.src = user;
}
const Employee = ({employee}) => (
	<Row type="flex" gutter={[12, 24]} className="employee_item">
		<Col span={1} className="avatar">
			<img
				src={employee.avatar}
				alt={employee.name}
				onError={handleError}
			/>
		</Col>
		<Col span={3} className="vertical_align">
			{employee.name}
		</Col>
		<Col span={3} className="vertical_align">
			{employee.title}
		</Col>
		<Col span={3} className="vertical_align">
			{employee.company}
		</Col>
		<Col span={13}>
			{
				employee.bio && 
				Number(employee.bio) !== 0 &&
				sanitizeHtml(employee.bio, { allowedTags: [] })
			}
		</Col>
	</Row>
);

export default Employee;
