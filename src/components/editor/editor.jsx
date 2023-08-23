import React from 'react';

const Editor = ({editor}) => {
    console.log(editor);

    return (
        <div className="row row-cols-1 g-4 py-4">
            <div className="col">
                <div className="card h-100">
                    <img src={editor?.image} className="card-img-top" alt="card image" />
                        <div className="card-body">
                            <h5 className="card-title">{editor?.title}</h5>
                            <p className="card-text">{editor?.detail}</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-body-secondary">Published Date: {editor?.date}</small>
                        </div>
                </div>
            </div>
        </div>

    );
};

export default Editor;