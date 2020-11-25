import React from 'react';

function ModalAddProduct() {
    const urlPhoto = 'https://sun9-56.userapi.com/impg/46d6OEAguHzOvhD8gFvtuaKJpgbB2HdpCrR2wQ/rXhMbv1AJnE.jpg?size=800x800&quality=96&proxy=1&sign=1c6396244ef85dbe1ab426308018ddca';
  return (
    <div className="modal fade" id="addProduct" tabindex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="container">
              <div className="row justify-content-center">
                  <div className="col-md-6 text-center">
                    <figure className="figure">
                        <img src={urlPhoto} className="figure-img img-fluid rounded profile-img" alt="photo" />
                      </figure>
                    <small>  <form>
                        <div className="form-group">
                          <input type="file" className="form-control-file" id="changePhoto" />
                        </div>
                      </form></small>
                  </div>
              </div>
              <div className="row justify-content-center">
                  <div className="col-md-6">
                    <form>
                        <div className="form-group">
                          <label for="price">Price</label>
                          <input className="form-control" type="text" id="price" placeholder="Enter price" />
                          <label for="producer">Producer</label>
                          <input type="text" className="form-control" id="producer" placeholder="Enter producer" />
                          <label for="type">Type</label>
                          <input type="text" className="form-control" id="type" placeholder="Enter type" />
                          <label for="sizes">Sizes</label>
                          <input className="form-control" type="text" id="sizes" placeholder="Enter sizes(use ',')" />
                          <label for="description">Description</label>
                          <textarea className="form-control" id="description" rows="3"></textarea>
                          <label for="tags">Tags</label>
                          <input type="text" className="form-control" id="tags" placeholder="Enter tags" />
                        </div>
                    </form>
                  </div>
              </div>
              <div className="row justify-content-center">
                  <div className="col-md-6">
                    <button className="btn general-button add-button-modal btn-block">Add product</button>
                    <button className="btn general-button delete-button btn-block" data-dismiss="modal">Canel</button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalAddProduct;
