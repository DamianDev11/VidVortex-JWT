import React, { useState } from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import VideoCallIcon from '@mui/icons-material/VideoCall';
import { logout } from "../redux/userSlice";
import Upload from "./Upload";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;

const Search = styled.div`
  position: absolute;
  width: 40%;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  color: ${({ theme }) => theme.text};
`;
const Input = styled.input`
  border: none;
  width: 80%;
  background-color: transparent;
  outline:none;
`;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const User = styled.div`
  display:flex;
  align-items:center;
  gap:10px;
  font-weight:500;
  color: ${({ theme }) => theme.text};
`;

const Avatar = styled.img`
  width:32px;
  height:32px;
  border-radius:50%;
  background-color: #999
`;

const Navbar = () => {

  const [open,setOpen] = useState(false)
  const [q,setQ] = useState("");
  const navigate = useNavigate()

  const dispatch = useDispatch();
  const {currentUser} = useSelector(state=>state.user)

  const handleLogout = () =>{
    dispatch(logout());
    navigate("/")
  }

  

  return (
    <>
    <Container>
    <Wrapper>
        <Search>
        <Input placeholder="Search" onChange={e=>setQ(e.target.value)}/>
        <HomeIcon onClick={()=>navigate(`/search?q=${q}`)}/>
        
        </Search>
        {currentUser ? (<User>
        <VideoCallIcon onClick={()=>setOpen(true)}/>
        <Avatar src={currentUser.img}/>
        {currentUser.name}
        <Button onClick={handleLogout}>Logout</Button>
        </User>) : ( <Link to="signin" style={{ textDecoration: "none" }}>
        <Button>
        <HomeIcon />
        SIGN IN
        </Button>
        </Link>)}
        </Wrapper>
        </Container>
    {open && <Upload setOpen={setOpen}/>}
        </>
  );
};

export default Navbar;
