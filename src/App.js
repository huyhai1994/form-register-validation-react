import React, {useState} from "react";
import "./App.css";

function App() {
    const [form, setForm] = useState({});

    /*TODO: Khởi tạo hàm handleChange nhận event làm param truyền vào, hàm này sẽ cập nhật lại giá trị mới cho form thông qua hàm setForm
    */
    function handleChange(event) {
        setForm({
            ...form, [event.target.name]: event.target.value
        });
    }

    /*TODO: Khởi tạo hàm handleSubmit
        Khai báo biến isValid mang giá trị bằng form.username && form.email && form.password && form.confirmPassword, biến này sẽ quyết định thông báo được đưa ra
         Sử dụng hàm alert để đưa ra thông báo phù hợp
            Nếu isValid bằng true thì thông báo đăng ký thành công
        Nếu isValid bằng false thì thông báo người dùng điền đầy đủ thông tin*/
    function handleSubmit() {
        const isValid = form.username && form.email && form.password && form.confirmPassword;
        alert(isValid ? "Sign in success!!!" : "Please fill out all the fields!!!");
    }

    /*TODO: Tạo hàm return, trả về là element JSX thể hiện các element của form Sign in
    */
    return (<div>
        <h1>Sign up</h1>
        <form>
            <div className="custom-input">
                <label>Username </label>
                <input
                    name="username"
                    value={form.username || ""}
                    onChange={handleChange}
                />
            </div>
            <div className="custom-input">
                <label>Email </label>
                <input
                    name="email"
                    value={form.email || ""}
                    onChange={handleChange}
                />
            </div>
            <div className="custom-input">
                <label>Password </label>
                <input
                    type="password"
                    name="password"
                    value={form.password || ""}
                    onChange={handleChange}
                />
            </div>
            <div className="custom-input">
                <label>Confirm password </label>
                <input
                    type="password"
                    name="confirmPassword"
                    value={form.confirmPassword || ""}
                    onChange={handleChange}
                />
            </div>
            <button type="button" onClick={handleSubmit}>
                Submit
            </button>
        </form>
    </div>);
}

export default App;