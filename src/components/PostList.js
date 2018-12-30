import React  from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component{
    componentDidMount(){
        this.props.fetchPosts();
    }

    renderList(){
        return this.props.posts.map( post => {
            return(
            <div className="item" key={post.id}>
                <i className="large middle aligned icon user" />
                <div className="content">
                    <div className="description">
                    <h1>{post.userId}</h1>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
                <UserHeader userId={ post.userId }/>
                </div>
            </div>
            )
        });
    }

    render(){
        return(
            <div className="ui relaxed divided list">{this.renderList()}</div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        posts: state.posts
    }
}

//export default connect(null,{ fetchPosts })(PostList);
export default connect(mapStateToProps,{ fetchPosts })(PostList);