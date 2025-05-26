import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addRequirement,
  clearRequirements,
  submitRequirements,
} from '../store/problemSlice';

const RequirementForm = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const requirements = useSelector((state) => state.problem.pendingRequirements);
  const problemId = useSelector((state) => state.problem.createdProblemId);
  const userId = useSelector((state) => state.user.id); // assumes user slice

  const handleAdd = () => {
    if (input.trim() === '') return;
    dispatch(addRequirement(input.trim()));
    setInput('');
  };

  const handleSubmitAll = async () => {
    if (requirements.length === 0 || !problemId) return;
    await dispatch(submitRequirements({ requirements, problemId, userId }));
    dispatch(clearRequirements());
    alert('Requirements submitted!');
  };

  return (
    <div style={styles.container}>
      <h4>🛠 Add Requirements</h4>
      <input
        type="text"
        placeholder="Enter requirement"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleAdd} style={styles.button}>+ Add</button>

      {requirements.length > 0 && (
        <>
          <ul style={styles.list}>
            {requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
          <button onClick={handleSubmitAll} style={styles.submitButton}>
            Submit Requirements
          </button>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    background: '#fff',
    border: '1px solid #ccc',
    padding: '1rem',
    borderRadius: '8px',
    marginTop: '1rem',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    marginBottom: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '0.5rem 1rem',
    marginBottom: '1rem',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '1.2rem',
    marginBottom: '0.5rem',
  },
  submitButton: {
    backgroundColor: 'green',
    color: '#fff',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  }
};

export default RequirementForm;
