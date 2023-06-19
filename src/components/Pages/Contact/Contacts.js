import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Contacts.css"

function Contacts() {
    const [contacts, setContacts] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newContact, setNewContact] = useState({
        name: '',
        surname: '',
        phone: ''
    });

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setContacts(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteContact = (id) => {
        const updatedContacts = contacts.filter(contact => contact.id !== id);
        setContacts(updatedContacts);
    };

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewContact(prevContact => ({ ...prevContact, [name]: value }));
    };

    const saveContact = () => {
        // Виконайте запит для збереження нового контакту за необхідності
        // Потім оновіть список контактів, включаючи новий контакт
        // Закрийте форму після успішного збереження
        setNewContact({ name: '', surname: '', phone: '' });
        toggleForm();
    };

    return (
        <div className="contacts">
            <h1>Список контактів</h1>
            <table>
                <thead>
                <tr>
                    <th>Ім'я</th>
                    <th>Прізвище</th>
                    <th>Телефон</th>
                    <th>Дії</th>
                </tr>
                </thead>
                <tbody>
                {contacts.map(contact => (
                    <tr key={contact.id}>
                        <td>{contact.name}</td>
                        <td>{contact.surname}</td>
                        <td>{contact.phone}</td>
                        <td>
                            <button onClick={() => deleteContact(contact.id)}>Видалити</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            {!showForm && (
                <button onClick={toggleForm}>Додати контакт</button>
            )}
            {showForm && (
                <div>
                    <h2>Форма контакту</h2>
                    <form>
                        <label>
                            Ім'я:
                            <input type="text" name="name" value={newContact.name} onChange={handleInputChange} />
                        </label>
                        <br />
                        <label>
                            Прізвище:
                            <input type="text" name="surname" value={newContact.surname} onChange={handleInputChange} />
                        </label>
                        <br />
                        <label>
                            Телефон:
                            <input type="text" name="phone" value={newContact.phone} onChange={handleInputChange} />
                        </label>
                        <br />
                        <button type="button" onClick={saveContact}>Зберегти</button>
                        <button type="button" onClick={toggleForm}>Скасувати</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default Contacts;