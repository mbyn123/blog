import React from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

// class ListUi extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {}
//     }
//     render () {
//         return (
//             <div style={{ padding: '20px 50px' }}>
//                 <Input style={{ width: '250px' }} value={this.props.inputValue} onChange={this.props.changeValueInput} />
//                 <Button type="primary" onClick={this.props.clickBut}>保存</Button>
//                 <List
//                     style={{ width: '500px', margin: '10px 0' }}
//                     bordered
//                     dataSource={this.props.list}
//                     renderItem={(item,index) => (
//                         <List.Item onClick={()=>this.props.deleteItem(index)}>{item}</List.Item>
//                     )}
//                 />
//             </div>
//         )
//     }
// }


const ListUi=(props)=>{
    return(
        <div style={{ padding: '20px 50px' }}>
                <Input style={{ width: '250px' }} value={props.inputValue} onChange={props.changeValueInput} />
                <Button type="primary" onClick={props.clickBut}>保存</Button>
                <List
                    style={{ width: '500px', margin: '10px 0' }}
                    bordered
                    dataSource={props.list}
                    renderItem={(item,index) => (
                        <List.Item onClick={()=>props.deleteItem(index)}>{item}</List.Item>
                    )}
                />
            </div>
    )
}

export default ListUi;