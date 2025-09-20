import { useState } from 'react';

interface RegistrationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organization: string;
  position: string;
  country: string;
  dietaryRequirements: string;
  specialRequests: string;
}

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    position: '',
    country: '',
    dietaryRequirements: '',
    specialRequests: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Send to PHP backend
      const endpoint = import.meta.env.VITE_REGISTRATION_ENDPOINT || '/api/register.php';
      
      // Create FormData for PHP $_POST handling
      const formDataToSend = new FormData();
      formDataToSend.append('firstName', formData.firstName);
      formDataToSend.append('lastName', formData.lastName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('organization', formData.organization);
      formDataToSend.append('position', formData.position);
      formDataToSend.append('country', formData.country);
      formDataToSend.append('dietaryRequirements', formData.dietaryRequirements);
      formDataToSend.append('specialRequests', formData.specialRequests);
      
      const response = await fetch(endpoint, {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            organization: '',
            position: '',
            country: '',
            dietaryRequirements: '',
            specialRequests: ''
          });
          onClose();
        }, 2000);
      } else {
        console.error('Registration error:', result.message);
        setSubmitStatus('error');
      }

    } catch (error) {
      console.error('Registration error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content registration-modal" style={{width: '500px', padding: '20px'}} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        
        <div className="registration-modal-header">
          <h2 className="registration-modal-title">Inscription à la Conférence</h2>
          <p className="registration-modal-subtitle">
            Remplissez le formulaire ci-dessous pour vous inscrire à la Conférence Internationale sur la Nutrition
          </p>
        </div>

        {submitStatus === 'success' ? (
          <div className="registration-success">
            <div className="success-icon">
              <i className="bi bi-check-circle-fill"></i>
            </div>
            <h3>Inscription réussie !</h3>
            <p>Merci pour votre inscription. Vous recevrez un email de confirmation sous peu.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="registration-form">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="firstName">Prénom *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="form-control form-control-sm"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="lastName">Nom *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="form-control form-control-sm"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-control form-control-sm"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="phone">Téléphone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="form-control form-control-sm"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="organization">Organisation *</label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    required
                    className="form-control form-control-sm"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="position">Poste *</label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    className="form-control form-control-sm"
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="country">Pays *</label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
                className="form-control form-control-sm"
              >
                <option value="">Sélectionnez votre pays</option>
                <option value="Bénin">Bénin</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Togo">Togo</option>
                <option value="Ghana">Ghana</option>
                <option value="Côte d'Ivoire">Côte d'Ivoire</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Mali">Mali</option>
                <option value="Sénégal">Sénégal</option>
                <option value="France">France</option>
                <option value="Canada">Canada</option>
                <option value="États-Unis">États-Unis</option>
                <option value="Autre">Autre</option>
              </select>
            </div>

            {submitStatus === 'error' && (
              <div className="alert alert-danger">
                Une erreur s'est produite lors de l'inscription. Veuillez réessayer.
              </div>
            )}

            <div className="registration-form-actions">
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm btn-light" style={{color: 'var(--cin-red)'}}
                onClick={onClose}
                disabled={isSubmitting}
              >
                Annuler
              </button>
              <button
                type="submit"
                className="btn btn-primary btn-sm btn-light" style={{backgroundColor: 'var(--cin-primary)', color: 'white'}}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Inscription en cours...
                  </>
                ) : (
                  'S\'inscrire'
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegistrationModal;
