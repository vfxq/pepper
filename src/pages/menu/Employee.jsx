import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'antd';
import sanitizeHtml from 'sanitize-html';
import ImageLoader from 'react-load-image';
import { Modal } from '@src/components/modal';
import SelectColor from './SelectColor';
import user from '@src/images/static/user.png';
import loader from '@src/images/loaders/loader.gif'
import './style.scss';

const colorsSet = ['white', 'red', 'green', 'blue']; 

const Employee = ({employee}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentEmployee, setCurrentEmployee] = useState(false);
	
	const handleImageClick = employee => {
        setIsModalOpen(true);
		setCurrentEmployee(employee)
    }

    const PreLoader = () => <img src={loader} />;

    const ErrorLoader = () =><img src={user} />;
      
    const employeeAvatar = employee =>(
        <ImageLoader
            src={employee.avatar}
        >
            <img onClick={() => handleImageClick(employee)}/>
            <ErrorLoader />
            <PreLoader />
        </ImageLoader>
    )

   
	return (
		<>
			<Row type="flex" gutter={[12, 24]} className="employee_item">
				<Col span={1} className="avatar">
					{employeeAvatar(employee)}
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
				<Col span={11}>
					{
						employee.bio && 
						Number(employee.bio) !== 0 &&
						sanitizeHtml(employee.bio, { allowedTags: [] })
					}
				</Col>
                <Col span={2}>
                    <SelectColor colors={colorsSet} />
                </Col>
			</Row>
            {
                isModalOpen &&
                ReactDOM.createPortal(
                    <Modal handleClick={setIsModalOpen}>
                        <div className="modal__content">
                            <div className="employee_avatar content__position-center">
                                {employeeAvatar(currentEmployee)}
                            </div>
                            <div className="employee_name content__position-center">
                                {currentEmployee.name}
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
