import React, {Component} from 'react';
import {Form, Icon, Input, Button} from 'antd';


function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class LoginForms extends Component {

    componentDidMount() {
        // 开始时禁用登录按钮
        this.props.form.validateFields();
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const { getFieldDecorator , getFieldsError} = this.props.form;
        return (
            <div className={'login_con'}>
                <h2> 用户登录 </h2>
                <Form layout={'vertical'} onSubmit={ this.handleSubmit } className={'login_from'}>
                    <Form.Item>
                        {getFieldDecorator('username' , {
                            rules:[
                                    {required:true , whitespace:true , message:'用户名不能为空！！'}
                                    ,{ min:4 , message: '用户名至少4位' }
                                    ,{ max:16 , message: '最多16位' }
                                    ,{ pattern:/^[a-zA-Z0-9_]+$/ , message:'用户名必须是英文、数字或下划线组成' }
                                ]
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder={'请输入用户名'}
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password' , {
                            rules:[
                                {required:true , whitespace:true , message:'密码不能为空！！'}
                                ,{ min:4 , message: '密码至少4位' }
                                ,{ max:16 , message: '最多16位' }
                                ,{ pattern:/^[a-zA-Z0-9_]+$/ , message:'密码必须是英文、数字或下划线组成' }
                            ]
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder={'请输入密码'}
                                type={'password'}
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                            disabled={hasErrors(getFieldsError())}
                            block
                        >
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

const LoginForm = Form.create({ name: 'Login_form' })(LoginForms);

export default LoginForm;
















