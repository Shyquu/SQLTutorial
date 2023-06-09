import {InputGroup} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import {useEffect, useState} from "react";
import axios from "axios";

export function AddTask() {

    // https://youtu.be/fPuLnzSjPLE?t=1540

    const [books, setBooks] = useState([]);

    useEffect(()=> {
        const fetchAllBooks = async  () => {
            try {
                const res = await axios.get("http://localhost:8800/books")
                setBooks(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllBooks()
    }, [])

    return (
        <>
            <InputGroup>
                <InputGroup.Text>Übungstext</InputGroup.Text>
                <Form.Control as="textarea" aria-label="With textarea" />
            </InputGroup>
        </>
    );
}