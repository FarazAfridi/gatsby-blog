import { Link } from 'gatsby';
import * as React from 'react';

export interface Props {

}

const IndexPage: React.FC<Props> = () => {
    return (
        <div className="button"><Link style={{textDecoration: 'none'}} to="/blog/">Visit the Blog Page</Link></div>
    );
}

export default IndexPage;