//import './App.css';
import { firestore, auth } from '../firebase';
import React, { useEffect, useState, useReducer } from 'react';
import { collectIdsAndDocs } from '../utilities';
import { mainContext } from './mainContext';
import Posts from './Posts';


import Form from './Form';
const App = () => {
	const [ edit, setEdit ] = useState(false);
	const [ current, setCurrent ] = useState({});
	const [ user, setUser ] = useState(null);
	
	const reducer = (state, action) => {
		switch (action.type) {
			case 'SET':
				return action.payload;
			// case 'DELETE':
			// 	return state
			//return state.filter((s) => s.id !== action.payload.id);
			default:
				return state;
		}
	};
	const [ posts, dispatch ] = useReducer(reducer, []);

	useEffect(() => {
		const unsubscribeFromFirestore = firestore.collection('posts').onSnapshot((snap) => {
			const post = snap.docs.map(collectIdsAndDocs);
			dispatch({ type: 'SET', payload: post });
		});
		const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
			
			
			if(user){
				setUser({email:user.email,displayName:user.displayName,photoURL:user.photoURL,uid:user.uid})}
				else{
					setUser(null)
				}
			
		
		});
		return () => {
			unsubscribeFromFirestore();
			unsubscribeFromAuth();
		};
	}, []);
	async function handleCreate(post) {
		await firestore.collection('posts').add(post);
		console.log(post)
		//setTitle('');
		//setSubject('');
		//setCurrentPost(newPost);
	}
	const handleEdit = async (id) => {
		const p = posts.filter((post) => post.id === id);
		setCurrent({ id: p[0].id, title: p[0].title, subject: p[0].subject });

		//await firestore.doc(`posts/${id}`).update(currentPost);
	};
	const applyEdit = async (val) => {
		console.log('c= ', val);
		await firestore.doc(`posts/${current.id}`).update(val);
	};

	const handleRemove = async (id) => {
		await firestore.doc(`posts/${id}`).delete();
		//dispatch({ type: 'DELETE', payload: val });
	};

	return (
		<mainContext.Provider
			value={{
				posts: posts,
				handleCreate: handleCreate,
				handleRemove: handleRemove,
				handleEdit: handleEdit,
				edit: edit,
				setEdit: setEdit,
				current: current,
				setCurrent: setCurrent,
				applyEdit: applyEdit,
				user:user
			}}
		>
			
			<Form />
			
			<Posts />
			
		</mainContext.Provider>
	);
};

export default App;
/*
 <div class="user-nav__user">
                        <img src="img/user.jpg" alt="user" class="user-nav__user-photo">
                        <span class="user-nav__user-name">John</span>
					</div>
					 .user-nav__user-photo {
    height: 3.75rem;
    border-radius: 50%;
    margin-right: 1rem; }
					*/
