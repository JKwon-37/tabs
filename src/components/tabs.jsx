import React, {useState} from 'react'

const Tabs = (props) =>  {
    const [tab, setTab] = useState(0)

    const toggleTab = (e) => {
        setTab(e);
        // console.log('click');
    }

    return (
        <div>
            {/* {JSON.stringify(tab)} */}
            {
                props.currentTab.map((tab, i) => {
                    return (
                        <div key={i}style={{display:'inline-block', margin:'10px'}}>
                            <div key={i}onClick={ () => toggleTab(i)} style={{border:'3px'}}>
                                <p key={i} style={{height:'25px', width:'50px'}}>{tab.label}</p>
                            </div>
                        </div>
                    );
                })
            }
            <div style={{display:'flex', justifyContent:'center'}}>
                <p style={{height:'150px', width:'150px', textAlign:'center'}}>{props.currentTab[tab].content}</p>
            </div>
        </div>
    );
};

export default Tabs;