import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitProblem } from '../features/counter/ProblemSlice';
import { submitRequirement } from '../features/counter/RequirementSlice';
import MiniMap from './MiniMap';

const PESTLE_TAGS = ['Political', 'Economic', 'Social', 'Technological', 'Legal', 'Environmental'];
const LEVELS = ['local', 'regional', 'national', 'international'];
const HARDCODED_USER_ID = 'demo-user-123';

const ProblemReqComp = () => {
  const dispatch = useDispatch();
  const [problemData, setProblemData] = useState({
    title: '',
    statement: '',
    level: '',
    pestle: [],
  });
  const [location, setLocation] = useState(null);
  const [createdProblemId, setCreatedProblemId] = useState(null);
  const [requirementInput, setRequirementInput] = useState('');
  const [requirements, setRequirements] = useState([]);
  const [submittingProblem, setSubmittingProblem] = useState(false);
  const [submittingReq, setSubmittingReq] = useState(false);

  const togglePestle = (tag) => {
    setProblemData((prev) => ({
      ...prev,
      pestle: prev.pestle.includes(tag)
        ? prev.pestle.filter((t) => t !== tag)
        : [...prev.pestle, tag],
    }));
  };

  const handleProblemSubmit = async () => {
    if (!location || !problemData.title || !problemData.statement || !problemData.level) {
      alert('Please fill all fields and select a location.');
      return;
    }

    const payload = {
      ...problemData,
      location: location.join(','),
      pestle: [...problemData.pestle],
    };

    try {
      setSubmittingProblem(true);
      const resultAction = await dispatch(
        submitProblem({ data: payload, userId: HARDCODED_USER_ID })
      ).unwrap();
      setCreatedProblemId(resultAction.id);
    } catch (err) {
      alert('Failed to submit problem.');
      console.error(err);
    } finally {
      setSubmittingProblem(false);
    }
  };

  const handleRequirementSubmit = async () => {
    if (!requirementInput.trim() || !createdProblemId) return;

    try {
      setSubmittingReq(true);
      await dispatch(
        submitRequirement({
          problemId: createdProblemId,
          requirement: requirementInput.trim(),
        })
      ).unwrap();

      setRequirements((prev) => [...prev, requirementInput.trim()]);
      setRequirementInput('');
    } catch (err) {
      alert('Failed to submit requirement.');
      console.error(err);
    } finally {
      setSubmittingReq(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2>🧩 Define a Problem</h2>

      <input
        type="text"
        placeholder="Problem Title"
        value={problemData.title}
        onChange={(e) => setProblemData({ ...problemData, title: e.target.value })}
        style={styles.input}
      />

      <textarea
        placeholder="Problem Statement"
        value={problemData.statement}
        onChange={(e) => setProblemData({ ...problemData, statement: e.target.value })}
        style={{ ...styles.input, height: '80px' }}
      />

      <select
        value={problemData.level}
        onChange={(e) => setProblemData({ ...problemData, level: e.target.value })}
        style={styles.input}
      >
        <option value="">Select Level</option>
        {LEVELS.map((lvl) => (
          <option key={lvl} value={lvl}>{lvl}</option>
        ))}
      </select>

      <div style={styles.tags}>
        {PESTLE_TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => togglePestle(tag)}
            style={{
              ...styles.tag,
              backgroundColor: problemData.pestle.includes(tag) ? '#333' : '#eee',
              color: problemData.pestle.includes(tag) ? '#fff' : '#000',
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      <h4>Select Location</h4>
      <MiniMap
        onLocationSelect={setLocation}
        selectedCoords={location}
      />

      <button
        style={styles.button}
        onClick={handleProblemSubmit}
        disabled={submittingProblem || createdProblemId}
      >
        {submittingProblem ? 'Submitting...' : 'Submit Problem'}
      </button>

      {createdProblemId && (
        <>
          <h3>Add Requirements</h3>
          <input
            type="text"
            placeholder="Enter a requirement"
            value={requirementInput}
            onChange={(e) => setRequirementInput(e.target.value)}
            style={styles.input}
          />
          <button
            onClick={handleRequirementSubmit}
            style={styles.button}
            disabled={submittingReq}
          >
            {submittingReq ? 'Submitting...' : 'Add Requirement'}
          </button>
          <ul>
            {requirements.map((req, idx) => (
              <li key={idx}>{req}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '2rem auto',
    padding: '1rem',
    background: '#fff',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    fontFamily: 'sans-serif',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    marginBottom: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  button: {
    width: '100%',
    padding: '0.6rem',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginBottom: '1rem',
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '1rem',
  },
  tag: {
    padding: '0.4rem 0.7rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default ProblemReqComp;
