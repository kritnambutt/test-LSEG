import React, { useState, useEffect, useMemo } from 'react';
import Services from '../../../services';
import { 
    BACKEND_HOST, 
} from '../../../config/api/index';

const ContainerQ3 = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            // You can await here
            await Services.getDataS2Q3();
            setLoading(false)
        }

        fetchData();
    }, []);

    return (
        <div>
            <h2>Question 3</h2>
            <div className='box'>
                {loading ? 'Loading...' : (
                    <img 
                        src={BACKEND_HOST + '/images/image.png'}
                        style={{
                            width: '100%',
                            height: 'auto'
                        }}
                    />
                )}
            </div>
        </div>
    )
}

export default ContainerQ3;