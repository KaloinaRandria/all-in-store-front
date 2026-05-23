import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadArticles, removeArticle } from "../store/articleSlice.js";
import { logout } from "../store/authSlice.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function ArticlesPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { list, loading, error } = useSelector((s) => s.articles);
    const { user } = useSelector((s) => s.auth);

    useEffect(() => { dispatch(loadArticles()); }, [dispatch]);

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };

    const handleDelete = async (id) => {
        await dispatch(removeArticle(id));
        toast.success("Article supprimé");
    };

    return (
        <div className="container py-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h3>Articles</h3>
                <div className="d-flex align-items-center gap-3">
                    <span className="text-muted">Bonjour, <strong>{user?.sub}</strong></span>
                    <button className="btn btn-outline-danger btn-sm" onClick={handleLogout}>Déconnexion</button>
                </div>
            </div>

            {loading && <p>Chargement...</p>}
            {error && <div className="alert alert-danger">{error}</div>}

            <div className="table-responsive">
                <table className="table table-hover align-middle">
                    <thead className="table-dark">
                    <tr>
                        <th>ID</th><th>Nom</th><th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {list.map((article) => (
                        <tr key={article.id}>
                            <td>{article.id}</td>
                            <td>{article.designation}</td>
                            <td>
                                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(article.id)}>
                                    Supprimer
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}