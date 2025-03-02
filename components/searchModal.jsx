"use client";
import React from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function SearchModal({ isOpen, onClose, onChange, searchResults }) {
    const safeResults = Array.isArray(searchResults) ? searchResults : [];
  
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded bg-white p-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <Dialog.Title className="text-lg font-medium">Search Products</Dialog.Title>
            <button onClick={onClose} className="p-1">
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search for products..."
              onChange={onChange}
              className="w-full p-2 border border-gray-300 rounded"
              autoFocus
            />
          </div>
          
          {/* Display search results */}
          {safeResults.length > 0 ? (
            <div className="mt-4 max-h-60 overflow-y-auto">
              <h3 className="text-sm font-medium text-gray-500 mb-2">
                Search Results ({safeResults.length})
              </h3>
              {safeResults.map((item, index) => {
                // اطمینان از اینکه item یک شیء معتبر است
                if (!item || typeof item !== 'object') {
                  return <div key={`invalid-item-${index}`}>Invalid item</div>;
                }
                
                // استخراج مقادیر با بررسی وجود آنها
                const itemName = String(item.name || 'Product');
                const itemImage = String(item.image || '');
                const itemPrice = Number(item.price || 0);
                const itemOldPrice = item.oldPrice ? Number(item.oldPrice) : null;
                
                return (
                  <div 
                    key={`search-result-${index}`} 
                    className="p-2 hover:bg-gray-100 cursor-pointer rounded flex items-center"
                  >
                    {itemImage && (
                      <div className="w-12 h-12 mr-3 relative">
                        <Image 
                          src={itemImage} 
                          alt={itemName}
                          width={48}
                          height={48}
                          className="object-cover rounded"
                        />
                      </div>
                    )}
                    <div>
                      <div className="font-medium">{itemName}</div>
                      <div className="text-sm text-gray-500">
                        {itemOldPrice ? (
                          <>
                            <span className="line-through mr-2">${itemOldPrice}</span>
                            <span>${itemPrice}</span>
                          </>
                        ) : (
                          <span>${itemPrice}</span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-gray-500 text-sm">No results found</p>
          )}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
