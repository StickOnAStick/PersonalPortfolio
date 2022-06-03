import { useState, createContext } from 'react';
import { singleProjectData as singleProjectDataJson } from '../data/singleProjectData';
import React from 'react';

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children, ...title }) => {
	
	
	const selectedTitle = title.projectTitle;
	
	
	const [singleProjectData, setSingleProjectData] = useState(
		singleProjectDataJson.find(project => project.ProjectHeader.title === selectedTitle)
	);

	
	return (
		<SingleProjectContext.Provider
			value={{ singleProjectData, setSingleProjectData }}
		>
			{children}
		</SingleProjectContext.Provider>
	);
};

export default SingleProjectContext;
