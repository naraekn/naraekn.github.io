import React from 'react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import { useDispatch, useSelector } from 'react-redux';
import { Menus } from '../../types/enums';

import { actions } from '../../state/actions';
import { RootState } from '../../state/reducer';

interface Props {
  categories: string[]
}

export default function Menu({ categories }: Props) {
  const { menu, category } = useSelector((state: RootState) => ({
    category: state.category,
    menu: state.menu,
  }));

  const dispatch = useDispatch();

  function handleMenuChange(menu: Menus) {
    if(menu !== Menus.Posts) {
      dispatch(actions.setCategory(''));
    }
    dispatch(actions.setMenu(menu));
  }

  function handleCategoryChange(category: string) {
    dispatch(actions.setCategory(category));
  }

  const getClassName = (it: string) => {
    if(it === category) {
      return 'title selected'
    }

    return 'title';
  }
  
  return (
    <div className="menus">
      <div className="menu">
        <FontAwesomeIcon
          icon={faAngleRight} 
          size="xs"
        />
        <Link 
          className="title"
          to="/" 
          onClick={() => handleMenuChange(Menus.Home)}
        >
          Home
        </Link>
      </div>
      <div className="menu">
        <FontAwesomeIcon
          icon={faAngleRight} 
          size="xs"
        />
        <Link 
          className="title"
          to="/aboutme"
          onClick={() => handleMenuChange(Menus.AboutMe)} 
        >
          About Me
        </Link>
      </div>
      <div className="menu">
        <FontAwesomeIcon
          icon={faAngleRight} 
          size="xs"
        />
        <Link 
          className="title"
          to="/posts"
          onClick={() => handleMenuChange(Menus.Posts)} 
        >
          Posts
        </Link>
      </div>
      <div className="posts">
        {
          menu === Menus.Posts && categories.map((it) => (
            <div className="post" key={it}>
              <a 
                className={getClassName(it)}  
                onClick={() => handleCategoryChange(it)}
              >
                {it}
              </a>
            </div>
          ))
        }
      </div>
    </div>
  );
}
