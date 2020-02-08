import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'antd';
import sanitizeHtml from 'sanitize-html';
import { Modal } from '@src/components/modal';
import user from '@src/images/static/user.png';
import './style.scss'

const handleError = e => {
	e.target.src = user;
}
const Employee = ({employee}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentEmployee, setCurrentEmployee] = useState(false);
	
	const handleImageClick = employee => {
        setIsModalOpen(true);
		setCurrentEmployee(employee)
    }
    
    const employeeAvatar = (
        <img
			src={employee.avatar}
		    alt={employee.name}
				onError={handleError}
				onClick={() => handleImageClick(employee)}
			/>
    )
	
	return (
		<>
			<Row type="flex" gutter={[12, 24]} className="employee_item">
				<Col span={1} className="avatar">
					{employeeAvatar}
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
            {
                isModalOpen &&
                ReactDOM.createPortal(
                    <Modal handleClick={setIsModalOpen}>
                        <div className="modal__content">
                            <div className="employee_avatar content__position-center">
                                {employeeAvatar}
                            </div>
                            <div className="employee_name content__position-center">
                                {employee.name}
                            </div>
                        </div>
                    </Modal>,
                    document.getElementById('portal')
                )
            }
		</>
	);
}

export default Employee;
