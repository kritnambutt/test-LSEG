import React, { useEffect, useState } from 'react';
import Services from '../../../services';

const ContainerQ1 = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            // You can await here
            const response = await Services.getDataQ1();
            setData(response.data)
          }

          fetchData();
    }, []);

    return (
        <div>
            <h2>Question 1</h2>
            <div>Result : {!data ? "Loading..." : data}</div>
        </div>
    )
}

export default ContainerQ1;